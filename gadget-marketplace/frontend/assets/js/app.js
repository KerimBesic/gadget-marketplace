const routes = {
  '/': 'views/home.html',
  '/login': 'views/login.html',
  '/register': 'views/register.html',
  '/dashboard': 'views/dashboard.html',
  '/products': 'views/products.html',
  '/product': 'views/product-detail.html'
};
async function loadView(path){
  const root=document.getElementById('view-root');
  const viewFile=routes[path]||routes['/'];
  const res=await fetch(viewFile);
  root.innerHTML=await res.text();
}
document.addEventListener('click',(e)=>{
  const a=e.target.closest('a[data-link]');
  if(!a)return;
  e.preventDefault();
  const href=a.getAttribute('href');
  history.pushState({},'',href);
  loadView(href);
});
window.addEventListener('popstate',()=>loadView(location.pathname));
loadView(location.pathname);