import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import makeGetFeedPostsService from 'modules/selectedGame/services/factories/makeGetFeedPostsService';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useSessionContext from 'shared/container/contexts/SessionContext/contexts/useSessionContext';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

interface UseGetFeedPostsController {
  loading: boolean;
  posts: IFeedPost[];
  getPosts(): Promise<void>;
}

export default function useGetFeedPostsController(): UseGetFeedPostsController {
  const [loading, setLoading] = useState(true);
  const [posts, setFeedPosts] = useState<IFeedPost[]>([]);
  const mounted = useRef(false);

  const getFeedPostsService = useMemo(() => makeGetFeedPostsService(), []);

  const session = useSessionContext();
  const toast = useToastContext();

  const getPosts = useCallback(async () => {
    setLoading(true);

    const response = await getFeedPostsService.execute();

    if (!mounted.current) return;
    setLoading(false);

    if (response.shouldLogout) return session.logout();

    if (response.error) return toast.showError(response.error);

    if (response.posts) setFeedPosts(response.posts);
  }, [getFeedPostsService, session, toast]);

  useEffect(() => {
    mounted.current = true;
    getPosts();

    return () => {
      mounted.current = false;
    };
  }, [getPosts]);

  return {
    loading,
    posts,
    getPosts,
  };
}