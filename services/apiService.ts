export interface BackendResource {
  id: number;
  title: string;
  description: string;
  uploader: number | null;
  category: number | null;
  status: string;
  upload_date: string;
  last_modified_date: string;
  view_count: number;
  download_count: number;
}

export const fetchResources = async (): Promise<BackendResource[]> => {
  const res = await fetch('/api/v1/resources/resources/');
  if (!res.ok) {
    throw new Error('Failed to fetch resources');
  }
  return res.json();
};
