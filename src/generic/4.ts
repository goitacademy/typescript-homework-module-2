/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface T<TitleType> {
  title: TitleType;
}

class Component<PropsType> {
  constructor (public props: T<PropsType>) {

  }
}

class Page extends Component<string> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
