import numpy as np
import name_list

file_name = "dp_data.txt"  # file名は各自自由です

name_arr1 = name_list.name_list("last")
name_arr2 = name_list.name_list("first")

#各自カスタマイズしてください

num = "090-"
for i in range(0, 10):              #テーブルの項目の生成の回数
    arr1 = np.random.randint(0, 9, 4)
    arr2 = np.random.randint(0, 9, 4)
    for j in range(len(arr1)):
        num += str(arr1[j])
    num += "-"
    for j in range(len(arr2)):
        num += str(arr2[j])
    nameFirst = np.random.randint(0, len(name_arr1))
    nameLast = np.random.randint(0, len(name_arr2))
    print("Fpnum:" + num)
    print("id:"+str(i+1))
    print("NameFirst:" + str(name_arr2[nameFirst]))
    print("NameLast:"+str(name_arr1[nameLast]))
    print()

    with open(file_name, "a") as f:
        f.write("\n")
        f.write("Fpnum:" + num+"\n")
        f.write("id:" + str(i + 1)+"\n")
        f.write("NameFirst:" + str(name_arr2[nameFirst])+"\n")
        f.write("NameLast:"+str(name_arr1[nameLast])+"\n")
    num = "090-"
