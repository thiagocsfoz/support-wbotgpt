'use client';

import ArticleFeedback from './ArticleFeedback';

export default function ArticleFeedbackWrapper({ category, article }) {
  return <ArticleFeedback category={category} article={article} />;
}