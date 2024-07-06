import { A } from "solid-start";
import { createFormControl,IFormControl } from "solid-forms";
import { mergeProps, Show } from "solid-js";

type VariableFormType = {[T: string]: string | number }

const InputTypeAttributeList = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
] as const

type InputTypeAttribute<T extends (typeof InputTypeAttributeList[number])>(
    
)

function CheckTypeAttribute(CheckString: InputTypeAttribute): string {
    return typeof CheckString === "string" ? CheckString ? console.error("Inputの型が間違っています")
}

export function TextInput(
    props: {
        control?: IFormControl<string>,
        name?: string,
        type?: 
    }
){
    props = mergeProps({control: createFormControl("",{
        validators: (value: string) => value.length === 0 ? {isMissing: true}: null,
    }),type: "text"},props)
    return (
        <div
            classList={{
                "is-invalid": !!props.control?.errors,
                "is-touched": props.control?.isTouched,
                "is-required": props.control?.isRequired,
            }}
        >
            <input 
                name={props.name}
                type={props.type}
                value={props.control?.value}
                onInput={(event) => {
                    props.control?.setValue(event.currentTarget.value)
                }}
                onBlur={() => props.control?.markTouched(true)}
                required={props.control?.isRequired}
            />

            <Show when={props.control?.isTouched && props.control.errors?.isMissing}>
                <small>Answer required.</small>
            </Show>

        </div>
    )
}