import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import About from './pages/about';
describe('About Component', () => {
    test('renders About component without crashing', () => {
      render(<About />);
    });
  
    test('renders hero section with correct text', () => {
      render(<About />);
      const heroHeading = screen.getByText(/Welcome to Skyline Airways/i);
      const heroParagraph = screen.getByText(/Your Gateway to the World/i);
      expect(heroHeading).toBeInTheDocument();
      expect(heroParagraph).toBeInTheDocument();
    });
  

    test('renders why choose us section with correct text', () => {
      render(<About />);
      const whyChooseUsHeading = screen.getByText(/Why Choose Us\?/i);
      const comfort = screen.getByText(/Comfort:/i);
      const reliability = screen.getByText(/Reliability:/i);
      const service = screen.getByText(/Service:/i);
      const globalNetwork = screen.getByText(/Global Network:/i);
      expect(whyChooseUsHeading).toBeInTheDocument();
      expect(comfort).toBeInTheDocument();
      expect(reliability).toBeInTheDocument();
      expect(service).toBeInTheDocument();
      expect(globalNetwork).toBeInTheDocument();
    });
  
    test('renders fleet section with correct text and images', () => {
      render(<About />);
      const fleetHeading = screen.getByText(/Our Fleet/i);
      const fleetText = screen.getByText(/The Skyline Airways fleet is comprised of the latest and most efficient aircraft in the industry,/i);
      const images = screen.getAllByRole('img');
      expect(fleetHeading).toBeInTheDocument();
      expect(fleetText).toBeInTheDocument();
      expect(images.length).toBe(3);
      expect(images[0]).toHaveAttribute('src', 'https://i.natgeofe.com/n/9a456df0-196b-47dc-8e6d-fd93258fe74e/h_15392413_3x2.jpg');
      expect(images[1]).toHaveAttribute('src', 'https://afar.brightspotcdn.com/dims4/default/5cc8b56/2147483647/strip/true/crop/2048x1080+0+142/resize/527x278!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Ffd%2F40%2F74da3e38836b9d6dca569a0e8532%2Foriginal-jaruek-20chairak-shutterstock-149225594.jpg');
      expect(images[2]).toHaveAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ENTgyW1OvZMqhDBSExe8KsQPEbhcEyzLdg&usqp=CAU');
    });
  
    
  });
  