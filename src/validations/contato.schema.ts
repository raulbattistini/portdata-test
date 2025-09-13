import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string()
    .min(1, "Nome é obrigatório")
    .refine((val) => {
      const parts = val
        .trim()
        .split(/\s+/)
        .filter(p => p.length > 0);
      return parts.length >= 2 && parts.every(p => p.replace(/[^a-zA-ZÀ-ÿ]/g, '').length >= 3);
    }, {
      message: "Nome deve ter pelo menos duas palavras com 3 letras cada"
    }),
  telefone: z.string()
    .min(8, "Telefone deve ter no mínimo 8 dígitos")
});

