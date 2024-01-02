export interface Note {
    id: number;
    title: string;
    text: string;
  }
  
  export const NOTES: Note[] = [
    {
      id: 1,
      title: 'Meeting Agenda',
      text: 'Discuss project timelines and deliverables with the team. Review client requirements and finalize action items.',
    },
    {
      id: 2,
      title: 'Shopping List',
      text: 'Milk, eggs, bread, vegetables, and fruits.',
    },
    {
      id: 3,
      title: 'Book Recommendations',
      text: 'Read "The Catcher in the Rye" and "To Kill a Mockingbird" for the book club meeting next month.',
    },
    {
      id: 4,
      title: 'Fitness Goals',
      text: 'Complete three days of cardio and two days of strength training this week. Stay hydrated and maintain a balanced diet.',
    },
    {
      id: 5,
      title: 'Vacation Plans',
      text: 'Research and plan the itinerary for the upcoming vacation. Book flights and accommodations.',
    },
  ];
  