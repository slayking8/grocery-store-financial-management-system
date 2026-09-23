// Sample owner assignments for this session. Codes are strings so leading zeroes remain valid.
// The seller can replace or remove any assignment in Configurações.
const keypadAssignments = products.map(product => ({ productId: product.id, code: String(product.id) }));
