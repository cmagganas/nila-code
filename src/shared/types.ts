export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export enum ToolCallStatus {
  RUNNING = 'running',
  DONE = 'done',
  ERROR = 'error',
}

export enum ToolName {
  READ_FILE = 'read_file',
  EDIT_FILE = 'edit_file',
  RUN_COMMAND = 'run_command',
  LIST_FILES = 'list_files',
}

export enum FormattedTextPartType {
  TEXT = 'text',
  BOLD = 'bold',
  ITALIC = 'italic',
  CODE = 'code',
  INLINE_CODE = 'inlineCode',
  STRIKETHROUGH = 'strikethrough',
  UNDERLINE = 'underline',
}

export type FormattedTextPart = {
  type: FormattedTextPartType;
  content: string;
  color?: string;
};

export type TranscriptLine = {
  text: string;
  color?: string;
  dimColor?: boolean;
  bold?: boolean;
};

export type { ThemeName } from './themes';
