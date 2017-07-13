import { ContestType, Contest } from '../../../interfaces';
import { observable, action } from 'mobx';

export default class ContestStore {

  contestList: Array<ContestType>;

  @observable
  contest: ContestType;

  constructor() {
    this.contestList = [];
    this.contest = new Contest();
  }

  setContestList(contestList: Array<ContestType>) {
    this.contestList = contestList;
  }

  setContest(contest: ContestType) {
    this.contest = contest;
  }

  @action
  updateTitle(title: string) {
    this.contest.title = title;
  }

  @action
  updateCode(code: string) {
    this.contest.code = code;
  }

  @action
  updateDescription(description: string) {
    this.contest.description = description;
  }

  @action
  handleSelection(key: string) {
    let contest = this.contestList.find((c) => {
      return c.id === key;
    });
    this.contest = contest;
  }
}
