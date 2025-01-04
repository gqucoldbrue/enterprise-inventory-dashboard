'use client'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart } from '@/components/BarChart'; // We'll need to create this

const Dashboard = () => {
  // Sample data for the stock levels chart
  const stockData = [
    { product: 'Product A', current: 65, minimum: 15, predicted: 70 },
    { product: 'Product B', current: 35, minimum: 10, predicted: 20 },
    { product: 'Product C', current: 130, minimum: 40, predicted: 150 },
    { product: 'Product D', current: 85, minimum: 25, predicted: 75 },
    { product: 'Product E', current: 45, minimum: 20, predicted: 55 },
  ];

  // Low stock alerts data
  const lowStockAlerts = [
    { product: 'Product B', currentStock: 35, reorderPoint: 40, status: 'Reorder Required' },
    { product: 'Product D', currentStock: 15, reorderPoint: 25, status: 'Reorder Required' },
    // Add more items as needed
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-2">Inventory Management Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Real-time inventory insights and AI-driven predictions
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Items
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">507</div>
            <p className="text-xs text-muted-foreground">Across 5 categories</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Low Stock Alerts
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Items below threshold</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Predicted Demand
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Inventory Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,500</div>
            <p className="text-xs text-muted-foreground">Current total</p>
          </CardContent>
        </Card>
      </div>

      {/* Stock Levels Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Stock Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <BarChart data={stockData} />
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Alerts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Low Stock Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Current Stock</th>
                  <th className="px-6 py-3">Reorder Point</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {lowStockAlerts.map((alert, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4">{alert.product}</td>
                    <td className="px-6 py-4">{alert.currentStock}</td>
                    <td className="px-6 py-4">{alert.reorderPoint}</td>
                    <td className="px-6 py-4 text-red-500">{alert.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;