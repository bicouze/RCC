import React, { useState } from 'react';
import { ArrowLeft, Calendar, Gift, ShoppingCart, Users, MapPin, Filter, Download, RefreshCcw, ShoppingBag, Percent } from 'lucide-react';
import { CompensationChart } from './CompensationChart';
import { MetricsCard } from './MetricsCard';
import { CompensationTable } from './CompensationTable';

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [dateRange, setDateRange] = useState('30');
  
  const compensationData = [
    { type: 'Hotels', amount: 450000 },
    { type: 'Meals', amount: 280000 },
    { type: 'Transport', amount: 180000 },
    { type: 'Activities', amount: 324567 },
  ];

  const consumptionData = [
    { type: 'Hotels', offered: 450000, consumed: 427500 },
    { type: 'Meals', offered: 280000, consumed: 196000 },
    { type: 'Transport', offered: 180000, consumed: 144000 },
    { type: 'Activities', offered: 324567, consumed: 259654 },
  ];

  const customerClassData = [
    { name: 'Economy', value: 2800 },
    { name: 'Premium Economy', value: 980 },
    { name: 'Business', value: 687 },
    { name: 'First', value: 100 },
  ];

  // Calculate total offered and consumed
  const totalOffered = consumptionData.reduce((acc, curr) => acc + curr.offered, 0);
  const totalConsumed = consumptionData.reduce((acc, curr) => acc + curr.consumed, 0);
  const consumptionRate = Math.round((totalConsumed / totalOffered) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">Compensation Analytics Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last 365 days</option>
              </select>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <RefreshCcw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            icon={Gift}
            title="Given Compensation"
            value="$1,234,567"
            change="+12.3%"
            isPositive={false}
			isIncreasing={true}
          />
          <MetricsCard
            icon={ShoppingCart}
            title="Consumed Compensation"
            value={`$${Math.round(totalConsumed).toLocaleString()}`}
            subtext={`${consumptionRate}% utilization rate`}
          />
          <MetricsCard
            icon={Users}
            title="Affected Customers"
            value="4,567"
            change="-8.5%"
            isPositive={true}
			isIncreasing={false}

          />
		  <MetricsCard
            icon={ShoppingBag}
            title="Purchased Offers"
            value="2,345"
            change="+5.2%"
            isPositive={true}
			isIncreasing={true}
            subtext="$89 avg. per customer"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Offered vs Consumed by Type</h2>
            <CompensationChart type="consumption" data={consumptionData} />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Compensation by Customer Class</h2>
            <CompensationChart type="pie" data={customerClassData} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <CompensationTable />
        </div>
      </div>
    </div>
  );
}