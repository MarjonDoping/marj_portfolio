import React from 'react';
import { PrimaryChip } from '../components/Chips';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: '"Working with [Your Name] as a graphic designer was an absolute pleasure. Their ability to translate complex ideas into captivating visual representations is truly remarkable. They bring a unique flair to every project they undertake."',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww', // Add avatar URL here
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: '"As a graphic designer, [Your Name] has a rare talent for turning concepts into visual masterpieces. Their ability to capture the essence of our brand and convey it through stunning graphics has greatly enhanced our marketing efforts."',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww', // Add avatar URL here
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: '"As a web designer, [Your Name] has an unmatched eye for detail and creativity. Their designs are not only visually stunning but also highly functional, creating seamless user experiences."',
    avatarUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww', // Add avatar URL here
  },
  {
    id: 4,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: '"Thanks to [Your Name]s SEO skills, our websites visibility and organic traffic have significantly increased. Their strategic approach to optimization and attention to detail have made a noticeable impact on our online presence."',
    avatarUrl: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D', // Add avatar URL here
  },
  {
    id: 5,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: 'Ive had the pleasure of collaborating with [Your Name] on several projects, and each time, theyve proven themselves to be a highly skilled and reliable SEO expert. Their in-depth knowledge of search engine algorithms and dedication to staying updated on industry trends make them a valuable asset to any team."',
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D', // Add avatar URL here
  },
  {
    id: 6,
    name: 'John Doe',
    position: 'CEO, Company X',
    comment: 'As a web designer, [Your Name] has an innate ability to balance aesthetics with functionality. They have a keen eye for design and a deep understanding of user experience, resulting in websites that not only look great but also perform exceptionally well."',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D', // Add avatar URL here
  },
  // Add more testimonials here
];

const TestimonialCard = ({ testimonial }) => {
  // Function to generate stars based on rating
  const renderStars = () => {
    // Assuming you have a rating property in each testimonial object
    const rating = 5; // Sample rating, replace this with actual rating from testimonial object
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Unicode for star symbol
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-12 custom-card ">
      <div className="mb-4">
        <p className="text-gray-800 text-lg">{testimonial.comment}</p>
      </div>
      
      <div className="flex items-center py-4 ">
      {testimonial.avatarUrl && (
          <img src={testimonial.avatarUrl} alt="Avatar" className="rounded-full h-16 w-16 mr-4 object-cover " />
        )}
        <div>
          <p className="text-gray-700 font-semibold">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.position}</p>
          {renderStars()}
        </div>
      
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='bg-white py-24'>
      <div className="flex justify-center items-center ">
        <PrimaryChip>
          <span className="">Testimonials</span>
        </PrimaryChip>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center p-4 text-black">
      What people are saying
      </h1>
      <p className="text-black mb-8 text-center">
      Discover why clients rave about my's skills in web design, graphic design, WordPress development, and SEO expertise. Read their glowing testimonials here!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-12  max-w-screen-xl mx-auto">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
