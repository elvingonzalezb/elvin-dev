import axios from 'axios'

export default axios.create({
  baseURL: 'https://plazavea.vtexcommercestable.com.br/api',
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'x-vtex-api-appkey': 'vtexappkey-plazavea-AZNEEQ',
    'x-vtex-api-apptoken': 'CMKPYSDMDOHSBDMIVUWLOFHRTYBJBVMQYOQPADHOKEIGSQDEFLEOXWWXFTWZRTLIBQUNNXISMIAJWBYCVXEPQYTCRSJGHIXQSAECWQQHDMBPVNBEVUETPWRDXRWUNBLE'
  }
});
