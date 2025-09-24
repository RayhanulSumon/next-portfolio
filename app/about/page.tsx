import { Metadata } from 'next';
import About from './components/About';

export const metadata: Metadata = {
  title: 'About - Rayhanul Sumon | Full Stack Developer',
  description: 'Learn about my skills, experience, and background as a Full Stack Web Developer',
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}