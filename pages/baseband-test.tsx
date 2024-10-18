import { NextPage } from 'next';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';

const BasebandTest: NextPage = () => {
  const { user, isLoading } = useAuth(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Baseband Test</h1>
        {/* Add test content */}
      </div>
    </Layout>
  );
};

export default BasebandTest;