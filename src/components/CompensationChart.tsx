import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CompensationChartProps {
  type?: 'bar' | 'pie' | 'consumption';
  data: Array<{
    type?: string;
    name?: string;
    amount?: number;
    value?: number;
    given?: number;
    consumed?: number;
  }>;
}

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

export function CompensationChart({ type = 'bar', data }: CompensationChartProps) {
  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  if (type === 'consumption') {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis tickFormatter={formatValue} />
            <Tooltip 
            formatter={(value: number, name: string) => {
			if (name === 'given') {
				return [formatValue(value), 'Given'];
			} else if (name === 'consumed') {
				return [formatValue(value), 'Consumed'];
			} else {
			return [formatValue(value), name || 'Amount'];
              }
            }}
            />
            <Legend />
            <Bar name="Given" dataKey="given" fill="#3B82F6" />
            <Bar name="Consumed" dataKey="consumed" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'pie') {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value} customers`, 'Count']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis tickFormatter={formatValue} />
          <Tooltip 
            formatter={(value: number) => [formatValue(value), 'Amount']}
          />
          <Bar dataKey="amount" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}