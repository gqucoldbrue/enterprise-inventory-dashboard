'use client'
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Activity, TrendingUp, Package, AlertCircle, DollarSign } from 'lucide-react';

const EnterpriseDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  const data = [
    { name: 'Jan', sales: 4000, inventory: 2400, costs: 2400 },
    { name: 'Feb', sales: 3000, inventory: 1398, costs: 2210 },
    { name: 'Mar', sales: 2000, inventory: 9800, costs: 2290 },
    { name: 'Apr', sales: 2780, inventory: 3908, costs: 2000 },
    { name: 'May', sales: 1890, inventory: 4800, costs: 2181 },
    { name: 'Jun', sales: 2390, inventory: 3800, costs: 2500 }
  ];

  const statsCards = [
    { title: 'Total Revenue', value: '$48,234', trend: '+12%', icon: DollarSign, color: 'text-emerald-500' },
    { title: 'Active Stock', value: '1,234 units', trend: '-3%', icon: Package, color: 'text-blue-500' },
    { title: 'Monthly Growth', value: '23%', trend: '+5%', icon: TrendingUp, color: 'text-violet-500' },
    { title: 'Stock Alerts', value: '12', trend: '+2', icon: AlertCircle, color: 'text-amber-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Enterprise Dashboard</h1>
        <p className="text-gray-600">Real-time inventory and performance metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <p className={`text-sm ${
                stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {stat.trend} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alert Section */}
      <Alert className="mb-8 border-amber-200 bg-amber-50">
        <Activity className="h-4 w-4 text-amber-500" />
        <AlertDescription className="text-amber-800">
          Stock levels for 3 items are below the recommended threshold. Review inventory alerts.
        </AlertDescription>
      </Alert>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Sales vs. Inventory Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="inventory" 
                    stroke="#0ea5e9" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Cost Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="costs" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Period Selector */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-lg bg-white shadow-sm">
          {['Week', 'Month', 'Quarter', 'Year'].map((period) => (
            <button
              key={period.toLowerCase()}
              onClick={() => setSelectedPeriod(period.toLowerCase())}
              className={`px-4 py-2 text-sm font-medium ${
                selectedPeriod === period.toLowerCase()
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
              } ${
                period === 'Week' ? 'rounded-l-lg' : ''
              } ${
                period === 'Year' ? 'rounded-r-lg' : ''
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;