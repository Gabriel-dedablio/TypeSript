async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

interface Empresa  {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string,
  preco: number,
  descricao: string,
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}
fetchProduct();

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h2>${data.preco}</h2>
      <h2>${data.descricao}</h2>
      <h2>${data.garantia}</h2>
    </div>
  `;
}