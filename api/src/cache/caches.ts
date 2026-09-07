import { EntityCache } from "./entity-cache.js";
import { Project } from "../domain/project/project.js";

export const projectCache = new EntityCache<Project>();