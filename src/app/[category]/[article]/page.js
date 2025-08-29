import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleFeedbackWrapper from '@/components/ArticleFeedbackWrapper';
import articleData from '@/data/articles';

export default function ArticlePage({ params }) {
  const { category, article } = params;

  // Check if the category exists
  if (!articleData[category]) {
    notFound();
  }

  // Check if the article exists in the category
  if (!articleData[category][article]) {
    notFound();
  }

  const articleInfo = articleData[category][article];

  // Get category title (for breadcrumb)
  const categoryTitle = getCategoryTitle(category);

  // Function to render markdown content
  const renderContent = (content) => {
    if (!content) return null;

    // Split content by lines
    const lines = content.split('\n');
    let currentHeading = null;
    let inCodeBlock = false;
    let inList = false;
    let listType = null;
    let listItems = [];

    return lines.map((line, lineIndex) => {
      // Handle code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        return null; // Don't render the code block markers
      }

      if (inCodeBlock) {
        return (
          <pre key={`code-${lineIndex}`} className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{line}</code>
          </pre>
        );
      }

      // Handle headings
      if (line.startsWith('# ')) {
        currentHeading = line.substring(2).trim();
        return (
          <h1 key={`h1-${lineIndex}`} className="text-3xl font-bold mt-8 mb-4" id={slugify(currentHeading)}>
            {processLinks(line.substring(2), lineIndex)}
          </h1>
        );
      }

      if (line.startsWith('## ')) {
        currentHeading = line.substring(3).trim();
        return (
          <h2 key={`h2-${lineIndex}`} className="text-2xl font-bold mt-6 mb-3" id={slugify(currentHeading)}>
            {processLinks(line.substring(3), lineIndex)}
          </h2>
        );
      }

      if (line.startsWith('### ')) {
        currentHeading = line.substring(4).trim();
        return (
          <h3 key={`h3-${lineIndex}`} className="text-xl font-bold mt-5 mb-2" id={slugify(currentHeading)}>
            {processLinks(line.substring(4), lineIndex)}
          </h3>
        );
      }

      // Handle images
      if (line.trim().startsWith('![') && line.includes('](') && line.includes(')')) {
        const altTextMatch = line.match(/!\[(.*?)\]/);
        const srcMatch = line.match(/\]\((.*?)\)/);
        
        if (altTextMatch && srcMatch) {
          const altText = altTextMatch[1];
          const src = srcMatch[1];
          
          return (
            <div key={`img-${lineIndex}`} className="my-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={altText} 
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          );
        }
      }

      // Handle unordered lists
      if (line.trim().startsWith('- ')) {
        if (!inList || listType !== 'ul') {
          // Start a new list
          inList = true;
          listType = 'ul';
          listItems = [line.trim().substring(2)];
          return null;
        } else {
          // Add to existing list
          listItems.push(line.trim().substring(2));
          return null;
        }
      }

      // Handle ordered lists
      if (/^\d+\.\s/.test(line.trim())) {
        if (!inList || listType !== 'ol') {
          // Start a new list
          inList = true;
          listType = 'ol';
          listItems = [line.trim().replace(/^\d+\.\s/, '')];
          return null;
        } else {
          // Add to existing list
          listItems.push(line.trim().replace(/^\d+\.\s/, ''));
          return null;
        }
      }

      // Render list if we're leaving a list context
      if (inList && !line.trim().startsWith('- ') && !/^\d+\.\s/.test(line.trim())) {
        const listToRender = (
          listType === 'ul' ? (
            <ul key={`ul-${lineIndex}`} className="list-disc pl-5 my-3">
              {listItems.map((item, i) => (
                <li key={`li-${i}`}>{processLinks(item, `${lineIndex}-${i}`)}</li>
              ))}
            </ul>
          ) : (
            <ol key={`ol-${lineIndex}`} className="list-decimal pl-5 my-3">
              {listItems.map((item, i) => (
                <li key={`li-${i}`}>{processLinks(item, `${lineIndex}-${i}`)}</li>
              ))}
            </ol>
          )
        );
        
        inList = false;
        listItems = [];
        
        // If the current line is empty, just return the list
        if (!line.trim()) {
          return listToRender;
        }
        
        // Otherwise, return both the list and process the current line
        return [
          listToRender,
          line.trim() ? <p key={`p-${lineIndex}`} className="my-3">{processLinks(line, lineIndex)}</p> : null
        ];
      }

      // Handle paragraphs (non-empty lines that don't match other patterns)
      if (line.trim() && !line.startsWith('#')) {
        return <p key={`p-${lineIndex}`} className="my-3">{processLinks(line, lineIndex)}</p>;
      }

      // Empty lines
      return null;
    });
  };

  // Helper function to slugify headings for anchor links
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove non-word chars
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  };

  // Helper function to process links and bold text in content
  const processLinks = (text, lineIndex) => {
    if (!text) return text;
    
    let processedText = text;
    let parts = [];
    let lastIndex = 0;

    // First, process links [text](url)
    const linkPattern = /\[(.*?)\]\((.*?)\)/g;
    let linkMatch;

    while ((linkMatch = linkPattern.exec(processedText)) !== null) {
      // Add text before the link
      if (linkMatch.index > lastIndex) {
        parts.push(processBoldText(processedText.substring(lastIndex, linkMatch.index), lineIndex, lastIndex));
      }

      // Process the link text for bold formatting
      const linkText = processBoldText(linkMatch[1], lineIndex, linkMatch.index + 1);

      // Normalize and classify URL types
      let url = (linkMatch[2] || '').trim();

      // Guard against Cloudflare obfuscation leftovers
      if (url === '/cdn-cgi/l/email-protection' || url.startsWith('/cdn-cgi/l/email-protection')) {
        // Replace with a safe default mailto (prevents 404 outlink)
        url = 'mailto:contato@whatsbotgpt.store';
      }

      const isAnchor = url.startsWith('#');
      const isMailto = url.toLowerCase().startsWith('mailto:');
      const isTel = url.toLowerCase().startsWith('tel:');
      const isHttp = url.toLowerCase().startsWith('http://') || url.toLowerCase().startsWith('https://');
      const isInternalRoute = url.startsWith('/');

      if (isAnchor || isMailto || isTel || isHttp) {
        // Use a native anchor for anchors, mailto/tel, and external http(s)
        parts.push(
          <a
            key={`link-${lineIndex}-${linkMatch.index}`}
            href={url}
            className="text-blue-600 hover:text-blue-800"
            {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {linkText}
          </a>
        );
      } else if (isInternalRoute) {
        // Internal app route
        parts.push(
          <Link key={`link-${lineIndex}-${linkMatch.index}`} href={url} className="text-blue-600 hover:text-blue-800">
            {linkText}
          </Link>
        );
      } else {
        // Fallback: leave as plain text if URL type is unknown
        parts.push(linkText);
      }

      lastIndex = linkMatch.index + linkMatch[0].length;
    }

    // Add remaining text after the last link
    if (lastIndex < processedText.length) {
      parts.push(processBoldText(processedText.substring(lastIndex), lineIndex, lastIndex));
    }

    return parts.length > 0 ? parts : processedText;
  };

  // Helper function to process bold text
  const processBoldText = (text, lineIndex, startIndex) => {
    if (!text.includes('**')) return text;

    const parts = [];
    const boldPattern = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let boldMatch;

    while ((boldMatch = boldPattern.exec(text)) !== null) {
      // Add text before the bold
      if (boldMatch.index > lastIndex) {
        parts.push(text.substring(lastIndex, boldMatch.index));
      }

      // Add the bold text
      parts.push(
        <strong key={`bold-${lineIndex}-${startIndex + boldMatch.index}`}>
          {boldMatch[1]}
        </strong>
      );

      lastIndex = boldMatch.index + boldMatch[0].length;
    }

    // Add remaining text after the last bold
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">Início</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href={`/${category}`} className="ml-2 text-gray-500 hover:text-gray-700">{categoryTitle}</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">{articleInfo.title}</span>
            </li>
          </ol>
        </nav>

        {/* Article content */}
        <article className="prose prose-blue max-w-none">
          {renderContent(articleInfo.content)}
        </article>

        {/* Article feedback */}
        <ArticleFeedbackWrapper category={category} article={article} />

        {/* Related articles */}
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">Artigos Relacionados</h3>
          <ul className="mt-4 space-y-2">
            {Object.entries(articleData[category] || {})
              .filter(([slug]) => slug !== article)
              .slice(0, 3)
              .map(([slug, info]) => (
                <li key={slug} className="text-blue-600 hover:text-blue-800">
                  <Link href={`/${category}/${slug}`}>{info.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category title
function getCategoryTitle(category) {
  const categoryTitles = {
    'primeiros-passos': 'Primeiros Passos',
    'assistentes': 'Assistentes',
    'leads-contatos': 'Leads e Contatos',
    'recursos-funcionalidades': 'Recursos e Funcionalidades',
    'conta-faturamento': 'Conta e Faturamento',
    'solucao-problemas': 'Solução de Problemas'
  };

  return categoryTitles[category] || category;
}