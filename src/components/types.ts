export type TextColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow'

export const colorClassMap: Record<TextColor, string> = {
  blue: 'dark:hover:text-blue-300',
  green: 'dark:hover:text-green-300',
  orange: 'dark:hover:text-orange-300',
  purple: 'dark:hover:text-purple-300',
  red: 'dark:hover:text-red-300',
  yellow: 'dark:hover:text-yellow-300',
};
