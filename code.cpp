#include <iostream>
using namespace std;
int main(){
    int arr[6] = {0,4,3,6,2,0};
    int start = 0 , end = 5;
    while(start<end){
        if(arr[start]==0 && arr[end]!=0){
            swap(arr[start],arr[end]);
            start++,end--;
        }
        else if(arr[end]==0){
            end--;
        }
        else{
            start++;
        }
    }
    for(int i=0;i<6;i++){
        cout<<arr[i]<<" ";
    }
}