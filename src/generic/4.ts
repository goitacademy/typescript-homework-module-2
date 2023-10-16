/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface TitleType {
	title: string;
}

class Component<T> {
	constructor(public props: T) {}
}

class Page extends Component<TitleType> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};
