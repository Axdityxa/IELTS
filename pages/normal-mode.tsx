import { NextPage } from 'next';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';

const NormalMode: NextPage = () => {
  const { user, isLoading } = useAuth(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Normal Mode</h1>
        <div className="grid gap-6">
          {/* Add normal mode content */}
        </div>
      </div>
    </Layout>
  );
};

export default NormalMode;