export async function getCategories() {
  // Implemente aqui o seu código!
  const responseCategories = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return responseCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let searchValue = 'search?';

  searchValue += categoryId ? `category=${categoryId}` : null;

  searchValue += query ? `${categoryId ? '&' : ''}q=${query}` : null;

  const responseProducts = await (await fetch(`https://api.mercadolibre.com/sites/MLB/${searchValue}`)).json();
  return responseProducts;
}
