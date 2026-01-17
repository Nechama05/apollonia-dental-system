int subMax (int nums[]){
    int maxSum = nums[0];
    int currSum = nums[0];
   for(int i = 1; i<nums.Length; i++)
   {
    currSum = Math.Max(nums[i], currentSum +nums[i]);
    maxSum = Math.max(currSum,maxSum);
   }
   return maxSum;
}

bool double (int nums []){
    HashSet <int> seen = new HashSet <int> ();
    foreach (int i in nums){
        if (seen.contains(nums[i]))
        return true;
        seen.Add(nums[i]);
    }
    return false;
}

int target (int nums[], int target){
HashSet <int> seen =  new HashSet <int>();
foreach (var i in nums){
    
    if (seen.contains(target - i))
    return true;
    seen.Add(i);
}
return false;
}

int binary (int[] nums, int x;){
    int left = 0, right = nums.Length -1;
    while(left<=right)
    {
        int mid = left + (right - left)/2;
        if(nums[mid]==x)
        return mid;
        else if (nums[mid]<x)
        left = mid+1;
        else right= mid+1;
        return -1;
    }
}
int single (int[] nums){
    int result = 0;
    foreach(var i in nums){
        result ^=num;
    }
    return result;
}
int k (int[] nums, int k)
{
    Arry.sort(nums);
    int[] result = new int[k];
    Arry.Copy(nums, num.Length - k, 0, k);
    return result;
}
int mist(int[] nums){
    Dictionary <int,int> counts = new Dictionary <int,int>();
    foreach(var i in nums){
        if(! counts.ContainsKey(i))
        counts [i] = 0;
        counts [i]++;
    }
    int max = 0;
    int freq = 0;
    foreach (var kvp in counts){
    if (kvp.Value >max);
    freq = kvp.Key;
    }
return freq;
    }
int func (int arr []){
    int count = 0;
    for (int i = 0; i < arr.Length; i++){
        for (int j = i+1; j < arr.Length; j++){
            if (arr[i] > arr[j])
            count++;
        }
    }
    return count;
}