import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  Plus,
  Puzzle,
  Search,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  HeartHandshake,
  Lightbulb,
  Brain,
  Users,
  UserPlus,
  UserCheck,
  BookOpen,
  Flag,
  Languages,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  billing: CreditCard,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  close: X,
  copy: Copy,
  ellipsis: MoreVertical,
  logo: ({ ...props}: LucideProps) => (
    <svg fill="#FFFFFF" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 512 512">
      <g>
        <g>
          <path d="M413.876,34.73c0-19.151-15.579-34.73-34.729-34.73s-34.73,15.579-34.73,34.73c0,10.532-1.455,21.047-4.131,31.564
            H171.685c-1.797-7.109-3.038-14.23-3.651-21.365h111.425c5.633,0,10.199-4.566,10.199-10.199c0-5.633-4.566-10.199-10.199-10.199
            H166.055C161.686,10.342,148.457,0,132.854,0c-19.15,0-34.73,15.579-34.73,34.73c0,80.895,52.403,151.003,112.129,221.269
            C152.28,324.16,98.124,395.274,98.124,477.27c0,19.15,15.579,34.73,34.73,34.73c14.823,0,27.501-9.338,32.476-22.438h181.339
            c4.975,13.1,17.653,22.438,32.476,22.438c19.15,0,34.73-15.579,34.73-34.73c0-81.081-52.47-151.094-112.129-221.269
            C359.721,187.84,413.876,116.726,413.876,34.73z M333.626,86.693c-2.959,7.47-6.47,14.947-10.444,22.438h-134.46
            c-3.958-7.475-7.455-14.952-10.408-22.438H333.626z M215.876,151.968c-5.418-7.484-10.532-14.962-15.263-22.438H311.29
            c-4.718,7.458-9.827,14.935-15.249,22.438H215.876z M280.638,172.367c-7.843,9.999-16.116,20.054-24.64,30.179
            c-8.501-10.087-16.796-20.142-24.688-30.179H280.638z M118.523,34.73c0-7.902,6.43-14.332,14.332-14.332
            c7.903,0,14.332,6.43,14.332,14.332c0,45.56,22.593,88.815,53.954,131.649c0.593,1.304,1.451,2.458,2.508,3.399
            c12.033,16.193,25.266,32.335,38.956,48.524c-4.276,4.994-8.591,10.005-12.924,15.039c-1.996,2.318-3.994,4.64-5.992,6.963
            C167.41,173.897,118.523,107.878,118.523,34.73z M147.186,477.27c0.001,7.902-6.429,14.332-14.332,14.332
            c-7.902,0-14.332-6.43-14.332-14.332c0-83.55,64.368-158.316,126.617-230.62c61.544-71.485,119.674-139.007,119.674-211.919
            c0-7.902,6.43-14.332,14.332-14.332c7.902,0,14.332,6.43,14.332,14.332c0,83.55-64.368,158.316-126.617,230.62
            C205.317,336.836,147.186,404.358,147.186,477.27z M199.4,384.563c4.647-7.459,9.691-14.936,15.057-22.438h83.181
            c5.362,7.483,10.41,14.961,15.069,22.438H199.4z M324.376,404.961c3.871,7.474,7.275,14.952,10.126,22.438H177.567
            c2.857-7.471,6.268-14.948,10.155-22.438H324.376z M229.725,341.726c8.326-10.689,17.158-21.44,26.278-32.271
            c9.092,10.788,17.949,21.54,26.328,32.271H229.725z M167.876,469.163c0.494-7.125,1.624-14.245,3.325-21.365h169.63
            c1.686,7.109,2.813,14.229,3.304,21.365H167.876z M393.478,477.27c0,7.902-6.43,14.332-14.332,14.332
            c-7.903,0-14.332-6.43-14.332-14.332c0-64.023-44.589-123.461-95.418-183.571c4.276-4.994,8.592-10.005,12.924-15.039
            c1.996-2.318,3.994-4.64,5.993-6.964C344.529,338.013,393.478,403.95,393.478,477.27z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M319.236,24.531h-5.1c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h5.1
            c5.633,0,10.199-4.566,10.199-10.199C329.435,29.097,324.869,24.531,319.236,24.531z"/>
        </g>
      </g>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        fill="currentColor"
      />
    </svg>
  ),
  nextjs: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="nextjs"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
      ></path>
    </svg>
  ),
  help: HelpCircle,
  laptop: Laptop,
  puzzle: Puzzle,
  media: Image,
  moon: Moon,
  page: File,
  post: FileText,
  search: Search,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash,
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="twitter"
      role="img"
      {...props}
    >
      <path
        d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"
        fill="currentColor"
      />
    </svg>
  ),
  user: User,
  warning: AlertTriangle,
  hearthandshake: HeartHandshake,
  lightbulb: Lightbulb,
  brain: Brain,
  users: Users,
  userplus: UserPlus,
  usercheck: UserCheck,
  bookopen: BookOpen,
  flag: Flag,
  languages: Languages,
};
