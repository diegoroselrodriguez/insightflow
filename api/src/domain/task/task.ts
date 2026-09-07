export interface Task {
  id: string;
  title: string;
  projectId: string | null;
  creatorId: string | null;
  teamId: string | null;
}