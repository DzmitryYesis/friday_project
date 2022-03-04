/* eslint-disable no-unused-expressions,react/jsx-props-no-spreading,react/require-default-props */
import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import style from './SuperInputText.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  onCtrlEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const SuperInputText: FC<SuperInputTextPropsType> = ({
  // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  onKeyDown,
  onCtrlEnter,
  error,
  className,
  spanClassName,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && // если есть пропс onChange
      onChange(e); // то передать ему е (поскольку onChange не обязателен)

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress && onKeyPress(e);

    onEnter && // если есть пропс onEnter
      e.key === 'Enter' && // и если нажата кнопка Enter
      onEnter(); // то вызвать его
  };
  const onKeyPressCtrlEnterCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyDown && onKeyDown(e);

    onCtrlEnter && // если есть пропс onEnter
      (e.ctrlKey || e.metaKey) && // и зажата кнопка ctrl или Сmd на mac
      e.key === 'Enter' && // и если нажата кнопка Enter
      onCtrlEnter(); // то вызвать его
  };

  const finalSpanClassName = `${style.error} ${spanClassName || ''}`;
  const finalInputClassName = `${
    error ? style.errorInput : style.superInput
  } ${className}`; // need to fix with (?:) and s.superInput

  return (
    <>
      <input
        type="text"
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        onKeyDown={onKeyPressCtrlEnterCallback}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};
