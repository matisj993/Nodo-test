export enum Tier {
  TIER_A = "TIER_A",
  TIER_B = "TIER_B",
  TIER_C = "TIER_C",
}

export interface TierAnswers {
  proyectoTipo: string;
  madurezDigital: string;
  presupuesto: string;
}

export const calculateLeadTier = (answers: TierAnswers): Tier => {
  const { proyectoTipo, madurezDigital, presupuesto } = answers;

  // Criterios TIER A
  // Criterio 1: P3-D (Más de $2.5M)
  if (presupuesto === "Más de $2.500.000.") {
    return Tier.TIER_A;
  }

  // Criterio 2: P1-A o B (Ventas/Leads) + P2-A (Ya invierte) + P3-C ($1.5M a $2.5M)
  const isVentasOLeads = proyectoTipo === "E-commerce / Ventas Directas." || proyectoTipo === "Generación de Leads (Servicios, B2B, Real Estate).";
  const yaInvierte = madurezDigital === "Ya invierto en pauta y quiero escalar/optimizar.";
  const presupuestoMedioAlto = presupuesto === "Entre $1.500.000 y $2.500.000.";

  if (isVentasOLeads && yaInvierte && presupuestoMedioAlto) {
    return Tier.TIER_A;
  }

  // Criterio TIER B
  // Criterio: P1 (Cualquiera) + P2 (A o B) + P3-B ($500k a $1.5M)
  const yaOInvertiAntes = yaInvierte || madurezDigital === "Invertí antes pero no obtuve resultados.";
  const presupuestoMedio = presupuesto === "Entre $500.000 y $1.500.000.";

  if (yaOInvertiAntes && presupuestoMedio) {
    return Tier.TIER_B;
  }

  // Criterio TIER C
  // Criterio 1: P3-A (Menos de $500.000)
  // Criterio 2: P2-C (Nunca invirtió) + P3-B o C (Presupuesto medio) a menos que salten a $2.5M
  return Tier.TIER_C;
};
