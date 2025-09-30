export class CreateArticleDto {
  title: string;
  content: string;
  donation_target: number;
  start_date: Date;
  end_date: Date;
  remaining_days: number;
  category_program: string;
}
