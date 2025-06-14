import './style.css';

// Detect if running in Vite dev server
const IS_DEV = !!import.meta.env.DEV;
console.log(`Running in ${IS_DEV ? 'development' : 'production'} mode`);

// Import all blog posts dynamically
const allBlogPosts = Object.values(import.meta.glob('../public/posts/**/*.ts', { eager: true }))
  .map(module => (module as any).default)
  .filter(post => post !== undefined);

// In production, only include visible posts. In dev, include all.
const blogPosts = IS_DEV ? allBlogPosts : allBlogPosts.filter(post => post.visible !== false);

// In dev, track draft visibility toggle
let showDrafts = true;

// Log the titles of the loaded blog posts
allBlogPosts.forEach(post => {
  console.log(`Loaded post: ${post.title} (visible: ${post.visible})`);
});

// Import about and network pages
import aboutPage from './about.js';
import networkPage from './network.js';

// List of primary tags
const PRIMARY_TAGS = ["upcoming", "event", "interview", "software"];

// State for selected tags
let selectedTags = new Set(); // All filters cleared by default
let currentPage = 'blog';

function renderNav() {
  return `
    <nav class="main-nav">
      <a href="#" class="nav-logo"><span class="logo-text">HQ</span></a>
      <div class="nav-links">
        <a href="#" class="nav-link${currentPage === 'blog' ? ' active' : ''}" data-page="blog">blog</a>
        <a href="#about" class="nav-link${currentPage === 'about' ? ' active' : ''}" data-page="about">about</a>
        <a href="#network" class="nav-link${currentPage === 'network' ? ' active' : ''}" data-page="network">network</a>
      </div>
    </nav>
  `;
}

function renderTagFilters() {
  return `
    <div class="tag-filters">
      ${PRIMARY_TAGS.map(tag => `
        <label class="tag-checkbox" data-tag="${tag}">
          <input type="checkbox" value="${tag}" ${selectedTags.has(tag) ? 'checked' : ''} />
          <span>${tag}</span>
        </label>
      `).join('')}
      <button class="clear-filters" type="button">Clear Filters</button>
    </div>
  `;
}

const generateBlogPostHTML = (post) => {
  // If no tags are selected, show all posts
  if (selectedTags.size > 0 && !post.tags.some(tag => selectedTags.has(tag))) return '';
  // In dev, hide drafts if toggled off
  if (IS_DEV && post.visible === false && !showDrafts) return '';
  const imageHTML = post.image ? `<img class="post-image" src="/${post.image}" alt="${post.title} image" />` : '';
  return `
    <div class="blog-post${post.visible === false ? ' draft-post' : ''}">
      <h2>${post.title}</h2>
      ${imageHTML}
      <p>${post.content}</p>
      <div class="tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
      </div>
      ${IS_DEV && post.visible === false ? '<div class="draft-label">DRAFT</div>' : ''}
    </div>
  `;
};

function renderAboutPage() {
  return `
    <div class="about-page">
      <h2>${aboutPage.title}</h2>
      <div class="about-content">${aboutPage.content}</div>
    </div>
  `;
}

function renderNetworkPage() {
  return `
    <div class="network-page">
      <h2>${networkPage.title}</h2>
      <div class="network-content">${networkPage.content}</div>
    </div>
  `;
}

function renderBlogPosts() {
  const blogContainer = document.querySelector<HTMLDivElement>('#app');
  let mainContent = '';
  if (currentPage === 'about') {
    mainContent = renderAboutPage();
  } else if (currentPage === 'network') {
    mainContent = renderNetworkPage();
  } else {
    mainContent = `
      <div class="tag-filters-container">${renderTagFilters()}</div>
      <div class="blog-wall">
        ${blogPosts.map(generateBlogPostHTML).join('')}
      </div>
    `;
  }
  blogContainer!.innerHTML = `
    <div class="hq-hero">
      <div class="hero-logo">
        <span class="logo-text">Hyperqualia HQ</span>
      </div>
      ${renderNav()}
    </div>
    ${mainContent}
  `;

  // Add event listeners for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = (e.target as HTMLElement).getAttribute('data-page');
      if (page) {
        currentPage = page;
        renderBlogPosts();
      }
    });
  });

  // Add event listeners for tag checkboxes and clear button if on blog page
  if (currentPage === 'blog') {
    // Tag checkbox logic
    document.querySelectorAll('.tag-checkbox').forEach(label => {
      label.addEventListener('click', (e) => {
        // Only trigger radio-like behavior if the click is NOT on the checkbox itself
        if ((e.target as HTMLElement).tagName.toLowerCase() !== 'input') {
          const tag = label.getAttribute('data-tag');
          if (!tag) return;
          if (selectedTags.size === 1 && selectedTags.has(tag)) {
            // If already selected, deselect
            selectedTags.clear();
          } else {
            selectedTags = new Set([tag]);
          }
          renderBlogPosts();
        }
      });
    });
    // Regular checkbox logic
    document.querySelectorAll('.tag-checkbox input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent label click
        const target = e.target as HTMLInputElement;
        if (target.checked) {
          selectedTags.add(target.value);
        } else {
          selectedTags.delete(target.value);
        }
        renderBlogPosts();
      });
    });
    // Clear filters
    const clearBtn = document.querySelector('.clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        selectedTags = new Set();
        renderBlogPosts();
      });
    }
    // In dev, add a toggle for draft visibility
    if (IS_DEV) {
      const draftToggle = document.createElement('button');
      draftToggle.className = 'toggle-drafts';
      draftToggle.textContent = showDrafts ? 'Hide Drafts' : 'Show Drafts';
      draftToggle.style.margin = '1em 0 1em 1em';
      draftToggle.onclick = () => {
        showDrafts = !showDrafts;
        renderBlogPosts();
      };
      const tagFiltersContainer = document.querySelector('.tag-filters-container');
      if (tagFiltersContainer) tagFiltersContainer.appendChild(draftToggle);
    }
  }
}

renderBlogPosts();
