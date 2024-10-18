import { FC } from 'react';
import Link from 'next/link';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

export const CareerCard: FC = () => {
  return (
    <Card title="Career Mode">
      <p className="text-gray-600 mb-4">
        Structured learning path with career-focused IELTS preparation
      </p>
      <Link href="/career-mode">
        <Button variant="primary">Start Career Mode</Button>
      </Link>
    </Card>
  );
};