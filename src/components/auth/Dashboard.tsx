import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession, signOut } from '../../lib/auth-client';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  LogOut, 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  Home, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3,
  Sun,
  Battery,
  DollarSign,
  Leaf,
  Plus,
  Edit,
  Trash2,
  Eye,
  Wind,
  Droplets
} from 'lucide-react';
import { Container } from '../../lib/dev-container';

export const Dashboard: React.FC = () => {
  const { data: session, isPending } = useSession();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const path = location.pathname;
    if (path.includes('energy-monitoring')) return 'energy-monitoring';
    if (path.includes('sales-management')) return 'sales-management';
    if (path.includes('customer-management')) return 'customer-management';
    if (path.includes('analytics')) return 'analytics';
    return 'overview';
  });

  // Mock data for demonstration
  const [energyData] = useState({
    currentProduction: 245.8, // kWh
    dailyConsumption: 180.2, // kWh
    excessEnergy: 65.6, // kWh
    totalRevenue: 1250.75, // USD
    activeSources: 4,
    customers: 12
  });

  const [energySources] = useState([
    { id: 1, type: 'Solar Panel Array A', capacity: 150, currentOutput: 125.5, status: 'Active', efficiency: 83.7 },
    { id: 2, type: 'Solar Panel Array B', capacity: 120, currentOutput: 98.3, status: 'Active', efficiency: 81.9 },
    { id: 3, type: 'Wind Turbine 1', capacity: 75, currentOutput: 22.0, status: 'Active', efficiency: 29.3 },
    { id: 4, type: 'Battery Storage', capacity: 200, currentOutput: 0, status: 'Charging', efficiency: 95.0 }
  ]);

  const [customers] = useState([
    { id: 1, name: 'Green Valley Resort', type: 'Hotel', monthlyPurchase: 450.5, rate: 0.12, status: 'Active' },
    { id: 2, name: 'Riverside Apartments', type: 'Residential', monthlyPurchase: 280.3, rate: 0.10, status: 'Active' },
    { id: 3, name: 'Downtown Office Complex', type: 'Commercial', monthlyPurchase: 720.8, rate: 0.14, status: 'Active' },
    { id: 4, name: 'Local Community Center', type: 'Public', monthlyPurchase: 150.2, rate: 0.08, status: 'Active' }
  ]);

  const [salesData] = useState([
    { id: 1, customer: 'Green Valley Resort', amount: 450.5, revenue: 54.06, date: '2024-01-15', status: 'Completed' },
    { id: 2, customer: 'Riverside Apartments', amount: 280.3, revenue: 28.03, date: '2024-01-14', status: 'Completed' },
    { id: 3, customer: 'Downtown Office Complex', amount: 720.8, revenue: 100.91, date: '2024-01-13', status: 'Pending' },
    { id: 4, customer: 'Local Community Center', amount: 150.2, revenue: 12.02, date: '2024-01-12', status: 'Completed' }
  ]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getSourceIcon = (type: string) => {
    if (type.includes('Solar')) return <Sun className="w-5 h-5 text-yellow-500" />;
    if (type.includes('Wind')) return <Wind className="w-5 h-5 text-blue-500" />;
    if (type.includes('Battery')) return <Battery className="w-5 h-5 text-green-500" />;
    return <Zap className="w-5 h-5 text-purple-500" />;
  };

  const renderOverview = () => (
    <Container componentId="dashboard-overview">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Production</CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{energyData.currentProduction} kWh</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Excess Energy</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{energyData.excessEnergy} kWh</div>
              <p className="text-xs text-muted-foreground">Available for sale</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${energyData.totalRevenue}</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Energy Sources Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {energySources.slice(0, 3).map((source) => (
                  <div key={source.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getSourceIcon(source.type)}
                      <div>
                        <p className="text-sm font-medium">{source.type}</p>
                        <p className="text-xs text-muted-foreground">
                          {source.currentOutput} / {source.capacity} kWh
                        </p>
                      </div>
                    </div>
                    <Badge variant={source.status === 'Active' ? 'default' : 'secondary'}>
                      {source.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.slice(0, 3).map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{sale.customer}</p>
                      <p className="text-xs text-muted-foreground">{sale.amount} kWh</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${sale.revenue}</p>
                      <Badge variant={sale.status === 'Completed' ? 'default' : 'secondary'}>
                        {sale.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );

  const renderEnergyMonitoring = () => (
    <Container componentId="energy-monitoring">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Energy Monitoring</h2>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Energy Source
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">223.8 kWh</div>
                <p className="text-sm text-muted-foreground">Solar Production</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Wind className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">22.0 kWh</div>
                <p className="text-sm text-muted-foreground">Wind Production</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Battery className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <p className="text-sm text-muted-foreground">Battery Level</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">2.1 T</div>
                <p className="text-sm text-muted-foreground">CO2 Saved Today</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Energy Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {energySources.map((source) => (
                <div key={source.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getSourceIcon(source.type)}
                    <div>
                      <h3 className="font-medium">{source.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        Capacity: {source.capacity} kWh | Current: {source.currentOutput} kWh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{source.efficiency}% Efficiency</p>
                      <Badge variant={source.status === 'Active' ? 'default' : 'secondary'}>
                        {source.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );

  const renderSalesManagement = () => (
    <Container componentId="sales-management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Sales Management</h2>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Sale
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">$1,250.75</div>
                <p className="text-sm text-muted-foreground">Today's Revenue</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">1,601.8 kWh</div>
                <p className="text-sm text-muted-foreground">Energy Sold</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Active Customers</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesData.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{sale.customer}</h3>
                    <p className="text-sm text-muted-foreground">
                      {sale.amount} kWh • {sale.date}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">${sale.revenue}</p>
                      <Badge variant={sale.status === 'Completed' ? 'default' : 'secondary'}>
                        {sale.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );

  const renderCustomerManagement = () => (
    <Container componentId="customer-management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Customer Management</h2>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{customer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {customer.type} • ${customer.rate}/kWh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">{customer.monthlyPurchase} kWh</p>
                      <p className="text-sm text-muted-foreground">Monthly Average</p>
                    </div>
                    <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'}>
                      {customer.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );

  const renderAnalytics = () => (
    <Container componentId="analytics-dashboard">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Analytics & Reports</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">+23%</div>
                <p className="text-sm text-muted-foreground">Revenue Growth</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">87%</div>
                <p className="text-sm text-muted-foreground">Energy Efficiency</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">45.2 T</div>
                <p className="text-sm text-muted-foreground">CO2 Saved This Month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">$0.11</div>
                <p className="text-sm text-muted-foreground">Avg. Sale Price/kWh</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Energy Production</span>
                  <span className="text-sm font-medium">7,450 kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Energy Sales</span>
                  <span className="text-sm font-medium">5,230 kWh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Revenue Target</span>
                  <span className="text-sm font-medium">$8,750</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customers.slice(0, 4).map((customer, index) => (
                  <div key={customer.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{customer.name}</p>
                        <p className="text-xs text-muted-foreground">{customer.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{customer.monthlyPurchase} kWh</p>
                      <p className="text-xs text-muted-foreground">
                        ${(customer.monthlyPurchase * customer.rate).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );

  if (isPending) {
    return (
      <Container componentId="dashboard-loading">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your energy dashboard...</p>
          </div>
        </div>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container componentId="dashboard-unauthorized">
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                <p className="text-muted-foreground mb-4">
                  Please log in to access your energy dashboard.
                </p>
                <Button onClick={() => navigate('/login')} className="w-full">
                  Go to Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    );
  }

  const user = session.user;

  return (
    <Container componentId="energy-dashboard-page">
      <div className="min-h-screen bg-gray-50">
        <Container componentId="dashboard-header">
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Energy Dashboard
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container componentId="dashboard-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Container componentId="dashboard-sidebar">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.image || undefined} alt={user.name || 'User'} />
                        <AvatarFallback>
                          {getUserInitials(user.name || 'U')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">Energy Manager</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant={activeTab === 'overview' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('overview')}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === 'energy-monitoring' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('energy-monitoring')}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Energy Monitoring
                    </Button>
                    <Button
                      variant={activeTab === 'sales-management' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('sales-management')}
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Sales Management
                    </Button>
                    <Button
                      variant={activeTab === 'customer-management' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('customer-management')}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Customers
                    </Button>
                    <Button
                      variant={activeTab === 'analytics' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('analytics')}
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Analytics
                    </Button>
                  </CardContent>
                </Card>
              </Container>

              <Container componentId="dashboard-main-content">
                <div className="lg:col-span-3">
                  {activeTab === 'overview' && renderOverview()}
                  {activeTab === 'energy-monitoring' && renderEnergyMonitoring()}
                  {activeTab === 'sales-management' && renderSalesManagement()}
                  {activeTab === 'customer-management' && renderCustomerManagement()}
                  {activeTab === 'analytics' && renderAnalytics()}
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};