// * Javascript Moduler Dosya Yönetimi

// Javascript de kodlarımızı daha kolay yönetmek için kodumuzu parçalarız.Bu parçalamayı yapabilmek için birden fazla javascript dosyası oluştururuz.Birden fazla javascript dosyasını yönetmek için yapmamız gereken bazı işlemler vardır.

// 1-) Bir tane ana javascript dosyası seçmek. Bu seçilen ana javascript dosyası Html kısımına bağlanır.Bu bağlama işlemi sırasında ana javascript dosyasının type ı module olarak belirlenir.

// 2-) Ana javascript dosyası haricindeki dosyalarda kodlamalar yapılır ve bu dosyalardaki kodlar bu dosya dışına  çıkarılıp diğer dosyalarda kullanılır.Bu işlemi yapabilmek için:

// i-) Dışarı çıkarılacak veriyi expor etmek.Bu işlem belirlenen elemanın dosya dışarına çıkmasına izin verir.

// ii-) export ile dosya dışarısına çıkarılan elemanı istenilen dosyada import etmek.Bu işlem belirlenen elemanı dosya içerisinde kullanacığımızı belirtir.

// 3-) Yukarıdaki adımlar neticesinde belirlenen eleman kullanılabilir.

import { getUser, getPosts } from "./api.js";
import { kişiler } from "./second.js";

// console.log(kişiler);

// kişiler.push("Hakan");

// console.log(kişiler);

// ! export-import işlemi yaparken her dosyada bir kereliğine export default hakkımız bulunur.Export default bir dosyadan sadece bir elemanı dışarı çıkarmak için kullanılır.

import kişlerDizisi from "./users.js";

// console.table(kişlerDizisi);

getUser();

getPosts();
