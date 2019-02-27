
export class DamageType {
    Id: number;
    Name: string;
    Description: string;
    [key: string]: string|number|(()=>void);

    static TableRows: DamageType[] = [];

	static find(a: any) {
        var result = DamageType.TableRows.slice(0);
        for (let key in a) {
            let value = a[key];
            result = result.filter(function (el: DamageType) {
                return el[key] == value;
            });
        }

        return result
    }

    static findOne(a: any) {
        return this.find(a)[0]
    }

    save() {
        DamageType.TableRows.push(this)
    }

}

function init() {
    var a = new DamageType();
    var b = new DamageType();
    a.Name = "A";
    b.Name = "B";
    a.Id = 1;
    b.Id = 2;
    a.save();
    b.save();
}

init();