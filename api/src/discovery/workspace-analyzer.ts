import { EntityType } from "./entity-type.js";

export function detectEntityType(properties: { name: string; type: string }[]): EntityType {

  const names = properties.map(p => p.name.toLowerCase());

  if (
    names.includes("tarea") &&
    names.includes("proyecto")
  ) {
    return "TASKS";
  }

  if (
    names.includes("proyecto") &&
    names.includes("responsable proyecto")
  ) {
    return "PROJECTS";
  }

  if (
    names.includes("nombre") &&
    names.includes("rol")
  ) {
    return "EMPLOYEES";
  }

  if (
    names.includes("equipo") &&
    names.includes("responsable")
  ) {
    return "TEAMS";
  }

  if (
    names.includes("nombre") &&
    names.includes("estado") &&
    names.includes("empleado activo")
  ) {
    return "SUBTASKS";
  }

  return "UNKNOWN";
}