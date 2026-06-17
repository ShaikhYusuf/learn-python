import { Participant, ParticipantList } from "./participants/participant";
import { IQuestion } from './question-list/questionCollectionPython';
import { QuestionList } from './question-list/question-list';

export class QuizServerRoutes {
    private participantList: ParticipantList = new ParticipantList();
    

    registerParticipant(inParticipantName: string, inParticipantEmail: string) {
        let foundParticipant = this.participantList.add(inParticipantName, inParticipantEmail);
        return foundParticipant;
    }

    getParticipantList() {
        let participantList = this.participantList.getList();
        return participantList;
    }

    getQuestionList(category: string) {
        let questionList: QuestionList = new QuestionList(category);
        let questionOnlyList: IQuestion[] = questionList.getList(0);
        return questionOnlyList;
    }

    getCompleteQuestionList(category: string) {
        let questionList: QuestionList = new QuestionList(category);
        let questionOnlyList: IQuestion[] = questionList.getCompleteList();
        return questionOnlyList;
    }

    updateScore(
        inParticipantId: number,
        inParticipantscore: number,
        inParticipantTimespent: number,
    ) {
        let foundParticipant = this.participantList.getById(inParticipantId);
        if (foundParticipant) {
            foundParticipant.score = inParticipantscore;
            foundParticipant.timespent = inParticipantTimespent;
        }
    }
}