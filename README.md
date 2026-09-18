# Merca — protótipo de vendas

Protótipo frontend, mobile-first, para o fluxo de venda de uma pequena mercearia em Moçambique.

## Abrir

Não há dependências nem processo de compilação. Abra `index.html` directamente num navegador, ou execute um servidor local:

```sh
python3 -m http.server 8080
```

Depois visite `http://localhost:8080`.

## Incluído nesta versão

- painel de produtos com categorias e pesquisa directa por variedade;
- grupos de produtos (exemplo: Arroz), com preço e stock por opção;
- atalhos para variedades favoritas através da estrela no grupo;
- atalhos e ordem dos produtos mantidos apenas durante a sessão;
- reorganização manual da ordem dos produtos;
- factura com vários produtos, alteração de quantidades e remoção de artigos;
- aviso flutuante de stock insuficiente ao concluir, com opções para continuar ou cancelar;
- cálculo do total, valor recebido e troco;
- confirmação visual da venda (apenas demonstração, sem persistência);
- apresentação responsiva para telemóvel, tablet e computador.

Todos os dados vivem apenas no browser e voltam ao estado inicial ao recarregar a página.

## Decisões de produto e design

Consulte [docs/README.md](docs/README.md) para o contexto do público-alvo, os fluxos de venda, as regras visuais, a pesquisa tipográfica e o histórico das decisões.
