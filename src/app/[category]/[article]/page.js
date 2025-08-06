import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
// For now, we'll use a static mapping
const articleData = {
  'getting-started': {
    'creating-account': {
      title: 'Creating your account',
      description: 'Learn how to sign up and set up your WhatsBotGPT account',
      content: `
# Creating your WhatsBotGPT Account

Welcome to WhatsBotGPT! This guide will walk you through the process of creating and setting up your account.

## Prerequisites

Before you begin, make sure you have:
- A valid email address
- A WhatsApp Business account (recommended) or a regular WhatsApp account
- A payment method for subscription (credit card or PayPal)

## Step 1: Sign Up

1. Visit [whatsbotgpt.store](https://whatsbotgpt.store)
2. Click on the **Sign Up** button in the top right corner
3. Enter your email address and create a password
4. Click **Create Account**

## Step 2: Verify Your Email

1. Check your email inbox for a verification message from WhatsBotGPT
2. Click the verification link in the email
3. You'll be redirected to the login page

## Step 3: Complete Your Profile

1. Log in with your email and password
2. Fill out your profile information:
   - Full name
   - Company name (if applicable)
   - Phone number
3. Click **Save Profile**

## Step 4: Choose a Subscription Plan

1. Navigate to the **Plans** page
2. Review the available subscription options
3. Select the plan that best fits your needs
4. Enter your payment information
5. Click **Subscribe**

## Step 5: Access Your Dashboard

After completing the subscription process, you'll be redirected to your dashboard where you can start creating your first bot.

## Troubleshooting

If you encounter any issues during the sign-up process:
- Make sure your email address is entered correctly
- Check that your password meets the minimum requirements
- Clear your browser cache and try again
- Contact support at support@whatsbotgpt.store

Congratulations! You've successfully created your WhatsBotGPT account. The next step is to [configure your first bot](/getting-started/configuring-first-bot).
      `
    },
    'configuring-first-bot': {
      title: 'Configuring your first bot',
      description: 'Step-by-step guide to creating and configuring your first bot',
      content: `
# Configuring Your First Bot

This guide will help you create and configure your first WhatsBot using our platform.

## Prerequisites

Before you begin, make sure you have:
- A WhatsBotGPT account
- Completed the account setup process

## Step 1: Create a New Bot

1. From your dashboard, click the **Create Bot** button
2. Enter a name for your bot (e.g., "Customer Support Bot")
3. Select a category for your bot (e.g., "Customer Service")
4. Click **Create**

## Step 2: Define Bot Personality

1. In the bot settings, navigate to the **Personality** tab
2. Configure the following settings:
   - Tone (Formal, Casual, Friendly)
   - Language (English, Spanish, Portuguese, etc.)
   - Response style (Concise, Detailed)
3. Click **Save Personality**

## Step 3: Set Up Initial Messages

1. Go to the **Messages** tab
2. Configure your welcome message that will be sent when a user first interacts with your bot
3. Set up a fallback message for when the bot doesn't understand a query
4. Click **Save Messages**

## Step 4: Create Automated Responses

1. Navigate to the **Automations** tab
2. Click **Add New Automation**
3. Define a trigger (e.g., specific keywords or phrases)
4. Create the response the bot should provide
5. Click **Save Automation**
6. Repeat for additional automations as needed

## Step 5: Test Your Bot

1. Go to the **Testing** tab
2. Use the chat simulator to test different user inputs
3. Verify that your bot responds correctly
4. Make adjustments as needed

## Step 6: Connect to WhatsApp

After testing and configuring your bot, you'll need to connect it to WhatsApp. See our guide on [Connecting your WhatsApp](/getting-started/connecting-whatsapp) for detailed instructions.

## Best Practices

- Start with a few simple automations and expand gradually
- Regularly review and update your bot's responses
- Use clear and concise language in your bot's messages
- Test your bot thoroughly before deploying it to customers

Congratulations! You've configured your first bot. The next step is to [connect it to WhatsApp](/getting-started/connecting-whatsapp).
      `
    },
    'connecting-whatsapp': {
      title: 'Connecting your WhatsApp',
      description: 'How to connect your WhatsApp account to WhatsBotGPT',
      content: `
# Connecting Your WhatsApp to WhatsBotGPT

This guide will walk you through the process of connecting your WhatsApp account to your WhatsBotGPT bot.

## Prerequisites

Before you begin, make sure you have:
- A WhatsBotGPT account
- A configured bot
- A WhatsApp Business account (recommended) or a regular WhatsApp account
- Your phone with WhatsApp installed and working

## Connection Methods

WhatsBotGPT offers two ways to connect your WhatsApp:

1. **WhatsApp Business API** (Recommended for businesses)
2. **WhatsApp Web** (Suitable for personal use or small businesses)

## Method 1: Connecting via WhatsApp Business API

### Step 1: Apply for WhatsApp Business API

1. From your WhatsBotGPT dashboard, go to **Connections** > **WhatsApp**
2. Select **WhatsApp Business API**
3. Click **Apply for API Access**
4. Fill out the application form with your business details
5. Submit the application

### Step 2: Verify Your Business

1. Wait for the verification email from Facebook/Meta
2. Follow the instructions to verify your business
3. This process typically takes 1-3 business days

### Step 3: Complete the Connection

1. Once approved, return to WhatsBotGPT dashboard
2. Go to **Connections** > **WhatsApp**
3. Click **Complete API Setup**
4. Follow the on-screen instructions to finalize the connection

## Method 2: Connecting via WhatsApp Web

### Step 1: Initiate Connection

1. From your WhatsBotGPT dashboard, go to **Connections** > **WhatsApp**
2. Select **WhatsApp Web**
3. Click **Connect WhatsApp**

### Step 2: Scan QR Code

1. A QR code will appear on your screen
2. Open WhatsApp on your phone
3. Tap the three dots (⋮) in the top right corner
4. Select **WhatsApp Web**
5. Scan the QR code displayed on your computer screen

### Step 3: Verify Connection

1. Wait for the confirmation message
2. Your WhatsApp is now connected to WhatsBotGPT
3. Keep your phone connected to the internet for the connection to remain active

## Important Notes

- For WhatsApp Web method, your phone must remain connected to the internet
- If using WhatsApp Business API, you'll need to maintain your subscription with both WhatsBotGPT and Meta
- You can disconnect your WhatsApp at any time through the **Connections** menu

## Troubleshooting

If you encounter issues connecting your WhatsApp:
- Ensure your phone has a stable internet connection
- Restart WhatsApp on your phone
- Clear browser cache and try again
- Make sure your WhatsApp is updated to the latest version

Congratulations! Your WhatsApp is now connected to WhatsBotGPT. You can start using your bot to automate conversations with your customers.
      `
    }
  },
  // Add more articles for other categories as needed
};

export function generateMetadata({ params }) {
  const { category, article } = params;

  if (!articleData[category] || !articleData[category][article]) {
    return {
      title: 'Artigo Não Encontrado'
    };
  }

  const articleInfo = articleData[category][article];

  return {
    title: `${articleInfo.title} - Suporte WhatsBotGPT`,
    description: articleInfo.description
  };
}

export default function ArticlePage({ params }) {
  const { category, article } = params;

  // Check if the article exists
  if (!articleData[category] || !articleData[category][article]) {
    notFound();
  }

  const articleInfo = articleData[category][article];
  const categoryTitle = {
    'getting-started': 'Primeiros Passos',
    'core-features': 'Recursos Principais',
    'integrations': 'Integrações',
    'billing-account': 'Faturamento & Conta',
    'troubleshooting': 'Solução de Problemas',
    'faqs': 'Perguntas Frequentes'
  }[category];

  // Function to convert markdown-like content to JSX
  // This is a very simplified version - in a real app, you'd use a proper markdown parser
  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-5 mb-2">{line.substring(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 list-disc">{line.substring(2)}</li>;
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || 
                 line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
        return <li key={index} className="ml-6 list-decimal">{line.substring(3)}</li>;
      } else if (line.trim() === '') {
        return <div key={index} className="my-2"></div>;
      } else {
        // Check for bold text
        const boldPattern = /\*\*(.*?)\*\*/g;
        let formattedLine = line;
        let match;
        let parts = [];
        let lastIndex = 0;

        while ((match = boldPattern.exec(formattedLine)) !== null) {
          parts.push(formattedLine.substring(lastIndex, match.index));
          parts.push(<strong key={`${index}-${match.index}`}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }

        parts.push(formattedLine.substring(lastIndex));

        return <p key={index} className="my-2">{parts}</p>;
      }
    });
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
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Este artigo foi útil?</h3>
          <div className="mt-2 flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Sim, ajudou
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Não, preciso de mais ajuda
            </button>
          </div>
        </div>

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
