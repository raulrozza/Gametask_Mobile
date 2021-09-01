import IActivity from 'modules/selectedGame/domain/entities/IActivity';

export default interface IActivitiesRepository {
  findAll(): Promise<IActivity[]>;
}
