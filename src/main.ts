import './style.css';
import techConference2025 from './posts/tech-conference-2025';
import softwareEngineerInterview from './posts/software-engineer-interview';
import latestSoftwareDevelopment from './posts/latest-software-development';
import futureTechExhibition from './posts/future-tech-exhibition';

const blogPosts = [
  techConference2025,
  softwareEngineerInterview,
  latestSoftwareDevelopment,
  futureTechExhibition,
];

// Generate blog post HTML
const generateBlogPostHTML = (post) => {
  return post.visible ? `
    <div class="blog-post">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <div class="tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
      </div>
    </div>
  ` : '';
};

// Render blog posts
const renderBlogPosts = () => {
  const blogContainer = document.querySelector<HTMLDivElement>('#app');
  blogContainer!.innerHTML = `
    <div class="blog-wall">
      ${blogPosts.map(generateBlogPostHTML).join('')}
    </div>
  `;
};

renderBlogPosts();
