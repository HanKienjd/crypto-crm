export interface ProjectModel {
  id: string;
  name: string;
  description: string;
  timeStart: Date;
  timeEnd: Date;
  postTutorial: string;
  videoTutorial: string;
  type: string;
  backer: string;
  checkDaily: boolean;
}