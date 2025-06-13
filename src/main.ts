import './style.css';
// Import all blog posts dynamically
const blogPosts = Object.values(import.meta.glob('../public/posts/*.ts', { eager: true }))
  .map(module => (module as any).default)
  .filter(post => post !== undefined);

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
