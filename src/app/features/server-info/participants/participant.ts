export class Participant {
  Id: number = 0;
  name: string = '';
  email: string = '';
  score: number = 0;
  timespent: number = 0;

  init(Id: number, name: string, email: string) {
    this.Id = Id;
    this.name = name;
    this.email = email;
    this.score = 0;
    this.timespent = 0;
  }
}

export class ParticipantList {
  private participantList: Participant[] = [];

  reset() {
    this.participantList = [];
  }

  get(participantName: string) {
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == participantName
    );
    return foundParticipant;
  }

  getById(participantId: number) {
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.Id == participantId
    );
    return foundParticipant;
  }

  add(participantName: string, participantEmail: string): Participant {
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == participantName
    );

    if (!foundParticipant) {
      let newParticipant: Participant = new Participant();
      newParticipant.init(this.participantList.length + 1, participantName, participantEmail);
      this.participantList.push(newParticipant);
      return newParticipant;
    } else {
      foundParticipant.score = 0;
      foundParticipant.timespent = 0;
      return foundParticipant;
    }
  }

  remove(participantName: string): boolean {
    let retValue = false;
    let foundIndex = this.participantList.findIndex(
      eachParticipant => eachParticipant.name == participantName
    );

    if (foundIndex !== -1) {
      this.participantList.splice(foundIndex, 1);
      retValue = true;
    }

    return retValue;
  }

  getList(): Participant[] {
    const cloneParticipantList = [...this.participantList];
    cloneParticipantList.sort((a, b) => b.score - a.score);

    return cloneParticipantList;
  }
}
