# Pesquisa por código numérico

Esta cópia separada do projeto usa códigos exclusivamente numéricos, escolhidos livremente pelo vendedor. O botão flutuante ativa a pesquisa na página de vendas; continua móvel e lembra a posição neste dispositivo. A faixa de categorias desaparece e o campo normal de pesquisa passa a mostrar o código; os mesmos cartões de produto mostram os resultados. O teclado desenhado fica na parte inferior. O botão partilhado de voltar ao topo mantém-se.

## Atendimento

O teclado numérico é desenhado no protótipo com quatro colunas e mantém o mesmo layout em todos os dispositivos. As três primeiras colunas contêm os números; a coluna direita contém as ações C, ⌫, OK e ×. O campo normal de pesquisa torna-se o visor de código, fica apenas de leitura e não abre o teclado do sistema. Cada dígito filtra imediatamente os produtos cujo código começa pelos dígitos introduzidos. Os resultados usam os cartões normais de vendas, por ordem numérica crescente do código, com imagem, nome, unidade e preço. Um código pode identificar um produto e também ser prefixo de outros. Por exemplo, `1`, `11` e `12` podem identificar três produtos distintos. Um prefixo pode igualmente não identificar produto algum.

O botão OK abre o diálogo de quantidade apenas quando o código introduzido corresponde exatamente a um produto. A quantidade começa em `1`. Sem correspondência exata, a confirmação mantém a lista filtrada, sem adicionar nada. Tocar em qualquer produto visível abre imediatamente o seu diálogo de quantidade, também com `1`. O produto e o stock continuam a usar os IDs do catálogo.

O botão C e o × do campo limpam todo o código e devolvem o foco ao campo. O botão ⌫ apaga o último dígito. O × da coluna direita fecha o modo de pesquisa e repõe as categorias. Fechar a pesquisa preserva a factura.

## Configuração

Em **Configurações → Pesquisa por código → Configurar códigos**, escolha um produto e introduza qualquer sequência de dígitos. Códigos exatos repetidos entre produtos são rejeitados; relações de prefixo são permitidas. Remover o código preserva o produto e o stock. As alterações duram apenas até recarregar, como os restantes dados do protótipo.

Os códigos iniciais deste experimento correspondem aos IDs numéricos dos 147 produtos de amostra. São valores de demonstração editáveis pelo vendedor; os códigos não são derivados do nome, categoria ou unidade do produto.
