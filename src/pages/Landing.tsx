// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Zap, Leaf, TrendingUp, Users, Battery, Sun, Wind, Droplets, Star, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getBenefitCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['benefit-card-0', 'benefit-card-1', 'benefit-card-2', 'benefit-card-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Solar Energy Production",
      description: "Advanced solar panel systems generating clean energy for your hotel operations with smart monitoring"
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-500" />,
      title: "Wind Power Integration",
      description: "Harness wind energy with our efficient turbine systems designed for hospitality environments"
    },
    {
      icon: <Battery className="w-8 h-8 text-green-500" />,
      title: "Energy Storage Solutions",
      description: "Store excess energy in high-capacity battery systems for peak demand periods and emergency backup"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Smart Energy Trading",
      description: "Automatically sell surplus energy to neighboring businesses and communities for additional revenue"
    }
  ];

  const services = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Energy Production Management",
      description: "Monitor and optimize your renewable energy production in real-time with advanced analytics and automated controls."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Community Energy Sales",
      description: "Connect with neighboring businesses and residential areas to sell your excess energy at competitive rates."
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "Sustainability Consulting",
      description: "Expert guidance on maximizing your renewable energy efficiency and reducing your carbon footprint."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Energy Security & Backup",
      description: "Ensure uninterrupted power supply for your hotel operations with our reliable backup energy systems."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Reduce Operating Costs",
      value: "Up to 70%",
      description: "Significant reduction in electricity bills"
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-500" />,
      title: "Carbon Footprint",
      value: "Zero Emissions",
      description: "100% clean renewable energy"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Revenue Generation",
      value: "$50K+ Annual",
      description: "Additional income from energy sales"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "ROI Timeline",
      value: "3-5 Years",
      description: "Quick return on investment"
    }
  ];

  const stats = [
    { label: "Hotels Powered", value: "250+" },
    { label: "Energy Saved", value: "15 GWh" },
    { label: "CO2 Reduced", value: "8,500T" },
    { label: "Revenue Generated", value: "$2.5M" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with renewable energy gradient background"
        className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900"
      >
        {/* Header */}
        <Header 
          devId="main-header" 
          devName="Main Header" 
          devDescription="Primary site header with navigation for renewable energy platform"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="main-nav" 
            devName="Main Navigation" 
            devDescription="Primary navigation bar for energy management platform"
            className="flex items-center justify-between"
          >
            <Div 
              devId="logo-section" 
              devName="Logo Section" 
              devDescription="EcoEnergy brand logo and name"
              className="flex items-center space-x-2"
            >
              <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </Div>
              <Span 
                devId="brand-name" 
                devName="Brand Name" 
                devDescription="EcoEnergy Hotel Solutions brand name"
                className="text-xl font-bold text-white"
              >
                EcoEnergy Hotels
              </Span>
            </Div>
            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu for energy platform"
              className="flex items-center space-x-4"
            >
              <Button 
                devId="solutions-button" 
                devName="Solutions Button" 
                devDescription="Link to energy solutions"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Solutions
              </Button>
              <Button 
                devId="pricing-button" 
                devName="Pricing Button" 
                devDescription="Link to pricing information"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Button>
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area for energy dashboard"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated energy manager"
                    className="text-gray-300"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Energy management dashboard button in navigation"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Energy Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons for energy platform users"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button for energy platform access"
                      variant="ghost" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Get started button for energy platform registration"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Get Started
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section promoting renewable energy for hotels"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Animated wrapper for renewable energy hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main hero title for renewable energy hotel solutions"
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Power Your Hotel with
                <Span 
                  devId="renewable-highlight" 
                  devName="Renewable Energy Highlight" 
                  devDescription="Highlighted renewable energy text in gradient"
                  className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {' '}Clean Energy
                </Span>
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Hero section description explaining renewable energy benefits for hotels"
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Generate renewable energy for your hotel operations and sell excess power to neighboring communities. 
                Reduce costs, increase revenue, and contribute to a sustainable future.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons for energy platform engagement"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button 
                      devId="hero-start-managing"
                      devName="Start Managing Energy Button"
                      devDescription="Primary CTA button for energy management dashboard"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Manage Energy
                    </Button>
                  </Link>
                ) : (
                  <Link to="/register">
                    <Button 
                      devId="hero-start-managing"
                      devName="Start Managing Energy Button"
                      devDescription="Primary CTA button for starting energy management"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Start Managing Energy
                    </Button>
                  </Link>
                )}
                <Button 
                  devId="hero-learn-more-button"
                  devName="Learn More Button"
                  devDescription="Secondary button to learn about renewable energy solutions"
                  variant="outline"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <Leaf className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Stats Section */}
        <Container componentId="stats-section">
          <Section 
            devId="stats-content" 
            devName="Stats Content" 
            devDescription="Statistics section showing renewable energy impact metrics"
            className="container mx-auto px-4 py-12"
          >
            <Div 
              devId="stats-grid" 
              devName="Stats Grid" 
              devDescription="Grid container for renewable energy statistics cards"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  devId={getStatCardId(index)}
                  devName={`${stat.label} Stat Card`}
                  devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                    <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Features Section */}
        <Container componentId="features-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Complete Renewable Energy Solutions</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                From energy generation to smart distribution and sales management
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  devId={getFeatureCardId(index)}
                  devName={`${feature.title} Feature Card`}
                  devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4">{feature.icon}</Div>
                    <H3 className="text-xl font-semibold text-white mb-2">{feature.title}</H3>
                    <P devId="noID" className="text-gray-400">{feature.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Services Section */}
        <Container componentId="services-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Our Energy Services</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive renewable energy solutions tailored for the hospitality industry
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  devId={getServiceCardId(index)}
                  devName={`${service.title} Service Card`}
                  devDescription={`Service card for ${service.title}: ${service.description}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-green-500/50 transition-all group"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex items-start space-x-4">
                      <Div devId="noID" className="flex-shrink-0 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </Div>
                      <Div devId="noID">
                        <H3 className="text-2xl font-semibold text-white mb-3">{service.title}</H3>
                        <P devId="noID" className="text-gray-400 leading-relaxed">{service.description}</P>
                        <Button 
                          devId="noID"
                          variant="ghost"
                          className="text-green-400 hover:text-green-300 p-0 mt-4 font-semibold"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Div>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Benefits Section */}
        <Container componentId="benefits-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Hotels Choose EcoEnergy</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Measurable benefits that impact your bottom line and environmental footprint
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  devId={getBenefitCardId(index)}
                  devName={`${benefit.title} Benefit Card`}
                  devDescription={`Benefit card showing ${benefit.title}: ${benefit.value} - ${benefit.description}`}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-green-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4 flex justify-center">{benefit.icon}</Div>
                    <Div devId="noID" className="text-3xl font-bold text-green-400 mb-2">{benefit.value}</Div>
                    <H3 className="text-lg font-semibold text-white mb-2">{benefit.title}</H3>
                    <P devId="noID" className="text-gray-400 text-sm">{benefit.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Hero Image Section */}
        <Container componentId="hero-image-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Solar panels on hotel roof generating renewable energy"
                className="w-full h-96 object-cover"
              />
              <Div devId="noID" className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80 flex items-center justify-center">
                <Div devId="noID" className="text-center text-white">
                  <H2 devId="noID" className="text-4xl font-bold mb-4">See EcoEnergy in Action</H2>
                  <P devId="noID" className="text-xl mb-6">Join hundreds of hotels already benefiting from renewable energy</P>
                  <Button 
                    devId="hero-image-cta"
                    devName="Hero Image CTA"
                    devDescription="Call-to-action button overlaid on hero image"
                    className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
                  >
                    Schedule a Consultation
                  </Button>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* CTA Section */}
        <Container componentId="cta-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 text-center border border-green-500/30">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Transform Your Hotel's Energy?</H2>
              <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start generating clean energy, reduce costs, and create new revenue streams today
              </P>
              <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  devId="cta-start-journey"
                  devName="Start Energy Journey Button"
                  devDescription="Primary CTA button to begin renewable energy journey"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Start Your Energy Journey
                  </span>
                </Button>
                <Button 
                  devId="cta-contact-expert"
                  devName="Contact Expert Button"
                  devDescription="Secondary CTA button to contact energy experts"
                  variant="outline"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Contact Our Experts
                  </span>
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="main-footer" 
          devName="Main Footer" 
          devDescription="Site footer with renewable energy platform links and copyright"
          className="container mx-auto px-4 py-8 border-t border-white/10"
        >
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
            <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
              © 2024 EcoEnergy Hotels. Powering sustainable hospitality.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Solutions</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};