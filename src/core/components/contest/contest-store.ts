import { ContestType } from '../../../interfaces';
import { observable, action } from 'mobx';

export default class ContestStore {
  
  contestList: Array<ContestType>

  @observable
  contest: ContestType

  setContestList(contestList) {
    this.contestList = contestList;
  }

  setContest(contest) {
    this.contest = contest;
  } 

  @action
  updateTitle(title) {
    this.contest.title = title;
  } 

  @action
  updateCode(code) {
    this.contest.code = code;
  } 

  @action
  updateDescription(description) {
    this.contest.description = description;
  } 

  @action
  handleSelection(key) {
    let contest = this.contestList.find((contest) => {
      return contest.id === key;
    })
    this.contest = contest;
  }
}