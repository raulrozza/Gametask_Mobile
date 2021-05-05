import IActivity from 'modules/selectedGame/entities/IActivity';

export default interface IActivitiesRepository {
  findAll(): Promise<IActivity[]>;
}
