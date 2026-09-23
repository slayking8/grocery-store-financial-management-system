// Fictional testing assortment: combinations, prices and stock are not supplier data.
// Each SKU shares the normal catalogue/cart/stock flow.
function addKeypadSampleCatalogue(products) {
  let nextId = Math.max(...products.map(product => product.id)) + 1;
  function family({group, root, brand, branch, variant, leaf, emoji, categories, units, prices, reuse = {}}) {
    units.forEach((unit, index) => {
      const existing = products.find(product => product.id === reuse[unit]);
      const product = existing || {id:nextId++};
      Object.assign(product, {name:[group,brand,variant].filter(Boolean).join(' '),group,categories:[...categories],unit,
        emoji,photo:null,price:prices[index],stock:[36,24,12,8][index],tilt:'0deg',color:'#f2f5f3'});
      delete product.image;
      if (!existing) products.push(product);
    });
  }
  const juiceBrands = [['A1','Ceres'],['A2','Compal'],['A3','Santal']];
  const flavours = [['A1','Manga'],['A2','Laranja'],['A3','Maçã'],['A4','Ananás']];
  for (const [branch,brand] of juiceBrands) for (const [leaf,variant] of flavours) family({group:'Sumo',root:'D1',branch,brand,leaf,variant,emoji:'🧃',categories:['Bebidas'],units:['200 ml','330 ml','1 litro','2 litros'],prices:[25,40,100,185]});
  for (const [branch,brand,variants] of [
    ['A1','Coca-Cola',[['A1','Original'],['A2','Sem açúcar']]],
    ['A2','Fanta',[['A1','Laranja'],['A2','Uva'],['A3','Ananás']]],
    ['A3','Sprite',[['A1','Lima-limão'],['A2','Sem açúcar']]]
  ]) for (const [leaf,variant] of variants) family({group:'Refresco',root:'A4',branch,brand,leaf,variant,emoji:'🥤',categories:['Bebidas'],units:['330 ml','500 ml','1 litro','2 litros'],prices:[35,50,85,145],reuse:brand==='Coca-Cola' && variant==='Original'?{'500 ml':4}:{}});
  for (const [branch,brand,variant,leaf,reuse,units] of [
    ['A1','Royal Aroma',null,null,{'1 kg':1},['1 kg','10 kg','25 kg','50 kg']],
    ['A2','Rani','Super Basmati','A1',{'1 kg':11},['1 kg','10 kg','25 kg','50 kg']],
    ['A3','Ashoka','Basmati Integral','A1',{'1 kg':12},['1 kg','10 kg','25 kg','50 kg']],
    ['A4','Namaste','Extra Longo','A1',{'5 kg':13},['5 kg','10 kg','25 kg','50 kg']],
    ['B1','Arima','Tailândia','A1',{'10 kg':14},['5 kg','10 kg','25 kg','50 kg']],
    ['B1','Arima','Índia','A2',{'25 kg':15},['5 kg','10 kg','25 kg','50 kg']],
    ['B2','Corrente',null,null,{'50 kg':16},['5 kg','10 kg','25 kg','50 kg']]
  ]) family({group:'Arroz',root:'A1',branch,brand,variant,leaf,reuse,units,emoji:'🍚',categories:['Cereais','Mercearia'],prices:units[0]==='1 kg'?[125,1100,2600,5000]:[550,1050,2500,4800]});
  for (const [branch,brand,reuse] of [
    ['A1','Dona',{'1 litro':2,'2 litros':17,'5 litros':18}],
    ['A2','San Drop',{'1 litro':19,'5 litros':20}],
    ['A3','Fula',{'1 litro':21}]
  ]) for (const [leaf,variant] of [['A1','Vegetal'],['A2','Girassol']]) family({group:'Óleo',root:'A2',branch,brand,leaf,variant,emoji:'🫗',categories:['Mercearia','Despensa'],units:['500 ml','1 litro','2 litros','5 litros'],prices:variant==='Vegetal'?[85,160,300,720]:[100,190,360,850],reuse:variant==='Vegetal'?reuse:{}});
}
