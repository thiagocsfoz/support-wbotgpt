'use client';

import TopArticles from './TopArticles';

export default function TopArticlesWrapper({ category, limit }) {
  return <TopArticles category={category} limit={limit} />;
}